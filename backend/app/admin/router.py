import json

from fastapi import APIRouter, Depends, File, Form, UploadFile

from app.exceptions import UserIsNotAdmin, InvalidFile, NoSuchCategory
from app.shop.schemas import SAddCategory
from app.shop.services import CategoryService, ShopService
from app.users.dependecies import current_user
from app.users.models import Users

router = APIRouter(prefix='/admin', tags=['admin'])


@router.post('/add_item')
async def add_item(
        categories: list[str] = Form(...),
        title: str = Form(...),
        description: str = Form(...),
        price: int = Form(...),
        files: list[UploadFile] = File(...),
        user: Users = Depends(current_user),
):
    if not user.is_admin:
        raise UserIsNotAdmin

    try:
        categories = categories[0].split(',')
        for i, category in enumerate(categories):
            categories[i] = (await CategoryService.find_one_or_none(name=category)).id
    except Exception:
        raise NoSuchCategory
    return await ShopService.add_new_item(
        categories, files, title=title, description=description, price=price
    )


@router.delete('/delete_item')
async def delete_item(item_id: int = Form(...), user: Users = Depends(current_user)):
    if not user.is_admin:
        raise UserIsNotAdmin
    await ShopService.delete_item(item_id)


@router.post('/add_category')
async def add_category(category: SAddCategory, user: Users = Depends(current_user)):
    if not user.is_admin:
        raise UserIsNotAdmin
    await CategoryService.add(name=category.name, parent=category.parent)


@router.delete('/delete_category')
async def delete_category(
        category_id: int = Form(...), user: Users = Depends(current_user)
):
    if not user.is_admin:
        raise UserIsNotAdmin
    await CategoryService.delete_by_id(category_id)


@router.post('/add_categories_from_json')
async def add_categories_from_json(file: UploadFile = File(...), user: Users = Depends(current_user)):
    if not user.is_admin:
        raise UserIsNotAdmin
    try:
        categories = json.load(file.file)
        for category in categories:
            is_existing = await CategoryService.find_one_or_none(name=category['name'])

            if is_existing:
                continue

            parent = await CategoryService.find_one_or_none(name=category['parent'])
            parent_id = None if not parent else parent.id
            category['parent'] = parent_id
            await CategoryService.add(**category)
    except Exception:
        raise InvalidFile
