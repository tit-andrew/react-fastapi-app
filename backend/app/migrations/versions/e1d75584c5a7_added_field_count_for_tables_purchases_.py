"""Added field count for tables purchases_item_user and card_item

Revision ID: e1d75584c5a7
Revises: 6876b4bbcdf6
Create Date: 2023-09-28 13:18:07.102256

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e1d75584c5a7'
down_revision: Union[str, None] = '6876b4bbcdf6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('card_item_user', sa.Column('count', sa.Integer(), nullable=True))
    op.add_column('purchase_item_user', sa.Column('count', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('purchase_item_user', 'count')
    op.drop_column('card_item_user', 'count')
    # ### end Alembic commands ###