import { styled } from 'styled-components';

const css = {
    HeaderContainer: styled.header`
        position: sticky;
        top: 0;
        left: 0;
        background-color: white;
        padding: 5px 0;
        box-shadow: 1px 0 2px 2px #f0efef;
        margin-bottom: 30px;
        z-index: 2;
    `,
    HeaderWrapper: styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 80px;

        @media (max-width: 700px) {
            gap: 10px;
            padding: 0 10px;
        }
    `,
    HeaderLogo: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 280px;
        height: 64px;
        background: linear-gradient(0deg, #fc8507 0%, #ffa218 100%);
        border-radius: 10px;

        @media (max-width: 700px) {
            width: auto;
            padding: 0 5px;
        }
    `,
    ContainerLogo: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        height: 64px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        transition: all 0.5s;
        &:hover {
            background: rgba(255, 255, 255, 0.12);
        }
    `,
    HeaderLogoText: styled.span`
        text-decoration: none;
        font-size: xx-large;
        font-weight: 900;
        color: white;
    `,
    ContainerCatalog: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        height: 44px;
    `,
    HeaderContainerCatalog: styled.div`
        display: flex;
        justify-content: space-evenly;
        color: white;
        font-size: large;
        font-weight: 400;
        background-color: rgba(255, 255, 255, 0.15);
        padding-top: 10px;
        padding-bottom: 10px;
        width: 125px;
        border-radius: 10px;
        transition: all 0.5s;
        cursor: pointer;
        &:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    `,
    HeaderSearch: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 35%;
        background-color: #f0efef;
        border-radius: 8px;
        cursor: text;
        transition: all 0.2s;

        @media (max-width: 700px) {
            width: auto;
        }
    `,
    HeaderSearchInput: styled.input`
        background-color: #f0efef;
        width: 90%;
        height: 64px;
        border: none;
        border-radius: 8px;
        padding-left: 15px;
        font-size: large;
        font-weight: 400;
        outline: none;
        transition: all 0.2s;

        @media (max-width: 700px) {
            width: 80%;
        }
    `,
    HeaderSearchBtn: styled.span`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 10%;
        cursor: pointer;

        @media (max-width: 700px) {
            width: 20%;
        }
    `,
    NavBtn: styled.div`
        width: 88.5px;
        padding-top: 5px;
        padding-bottom: 5px;
        transition: all 0.2s;
        cursor: pointer;
    `,
    HeaderNav: styled.div`
        display: flex;
        align-items: center;

        @media (max-width: 700px) {
            position: fixed;
            bottom: 0;
            background-color: #f0efef;
            width: 100%;
            justify-content: space-evenly;
            box-shadow: 1px 0 3px 2px #f0efef;
        }
    `,

    HeaderBtnLink: styled.span`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
        transition: all 0.2s;
        &:hover {
            color: rgba(0, 0, 0, 0.6);
        }
    `,
    ContainerLogin: styled.div`
        position: absolute;
        top: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-top: 10px;
        padding: 10px 15px;
        background-color: white;
        border: 1px solid rgb(207, 207, 207);
        border-radius: 10px;

        @media (max-width: 700px) {
            top: auto;
            bottom: 70px;
        }
    `,
    SearchResult: styled.div`
        position: fixed;
        top: 90px;
        display: flex;
        flex-direction: column;
        width: 35%;
        background-color: #f0efef;
        padding: 10px;
        border-radius: 5px;
        margin-left: 10px;

        @media (max-width: 700px) {
            width: 80%;
        }
    `,
    CountItems: styled.div`
        position: fixed;
        top: 32px;
        margin-left: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: orange;
        color: white;
        font-size: 12px;

        @media (max-width: 700px) {
            bottom: 32px;
            top: auto;
        }
    `,

    Footer: {
        Footer: styled.footer`
            display: flex;
            justify-content: space-evenly;
            background-color: #333;
            color: white;
            margin-top: 20px;
        `,
        FooterMenuGroup: styled.div`
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            margin-bottom: 30px;
            gap: 15px;
        `,
    },

    ItemList: {
        TypeSort: styled.div`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        `,
        Sidebar: styled.div`
            width: 20%;

            @media (max-width: 1000px) {
                width: auto;
                margin-bottom: 20px;
            }
        `,
        SidebarCaption: styled.h4`
            width: 100%;
            margin-left: 15px;
            margin-bottom: 10px;
        `,
        ItemsContainer: styled.div`
            width: 70%;

            @media (max-width: 1000px) {
                width: 95%;
            }
        `,
        ItemListDetail: styled.div`
            background-color: white;
            display: flex;
            border: 1px solid rgb(207, 207, 207);
            border-radius: 10px;
            padding: 15px 5px;

            @media (max-width: 700px) {
                flex-direction: column;
                align-items: stretch;
            }
        `,
        ItemListDetailLeft: styled.div`
            width: 30%;
            text-align: center;

            @media (max-width: 700px) {
                width: auto;
            }
        `,
        ItemListDetailImg: styled.img`
            width: auto;
            max-height: 150px;
            border-radius: 5px;
        `,
        ItemListDetailCenter: styled.div`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 65%;
            padding: 10px 0;

            @media (max-width: 700px) {
                align-items: center;
                width: auto;
            }
        `,
        ItemListDetailRight: styled.div`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-content: space-between;
            width: 15%;
            padding: 10px 0;
            text-align: center;

            @media (max-width: 700px) {
                width: auto;
            }
        `,
        ItemPrice: styled.h2`
            width: 100%;

            @media (max-width: 700px) {
                width: auto;
            }
        `,
    },
    ItemDetail: {
        ItemDetailSection: styled.div`
            display: flex;
            justify-content: center;
            text-align: ${props => props.textAlign};
            width: 50%;

            @media (max-width: 700px) {
                width: 100%;
            }
        `,
        ItemDetailImage: styled.img`
            width: auto;
            height: 100%;
            border-radius: 5px;
        `,
        ItemDetailRight: styled.div`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: end;

            @media (max-width: 700px) {
                align-items: center;
                margin-top: 30px;
            }
        `,
        ItemImage: styled.div`
            height: 400px;
            width: 80%;

            @media (max-width: 700px) {
                height: 300px;
            }
        `,
        ItemDetailBuy: styled.div`
            display: flex;
            align-items: center;
            box-shadow: 0 1px 24px rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 10px;
        `,
        ItemSubDetail: styled.div`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            margin: 0 auto 30px;
            max-width: 1200px;
            background-color: white;
            padding: 15px;
            border-radius: 15px;
        `,
        ItemStatContainer: styled.div`
            align-self: start;
            margin-top: -50px;

            @media (max-width: 700px) {
                margin-top: 0;
                margin-bottom: 10px;
            }
        `,
        ItemRating: styled.div`
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 10px;

            @media (max-width: 700px) {
                width: 100%;
                align-items: center;
            }
        `,
        ReviewContainer: styled.div`
            height: 300px;
            width: 45%;

            @media (max-width: 700px) {
                width: 100%;
            }
        `,
        CommentContainer: styled.li`
            display: flex;
            gap: 10px;
            align-items: center;
            padding-left: 15px;
            margin-bottom: 10px;
        `,
    },
    Categories: {
        CategoryContainer: styled.div`
            position: fixed;
            top: 90px;
            left: 10px;
            display: flex;
            background-color: white;
            width: 23%;
            min-width: 200px;
            border: 1px solid rgb(216, 216, 216);
            border-radius: 10px;
            padding: 20px 10px 0;
        `,
        CategoryLi: styled.li`
            margin-bottom: 15px;
            &:last-child {
                margin-bottom: 20px;
            }
        `,
    },
    CartFavoritePurchase: {
        Container: styled.div`
            max-width: 1200px;
            margin: 0 auto;

            @media (max-width: 700px) {
                width: 95%;
            }
        `,
        ListContainer: styled.section`
            display: grid;
            gap: 10px;
            padding: 20px 0 20px 20px;
            max-width: 1200px;
            background-color: white;
            border: 1px solid rgb(216, 216, 216);
            border-radius: 10px;
        `,
        ItemDetail: styled.li`
            display: grid;
            justify-content: space-around;
            align-items: center;
            height: 70px;
            border-bottom: 1px solid rgb(216, 216, 216);
            column-gap: 10px;
            ${props =>
                props.$styleLast ??
                `&:last-child {
                display: flex;
                border: none;
                justify-content: right;
                gap: 15px;
                padding-right: 15px;
                `}}
        `,
    },
    SectionHeader: styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 40px;
        font-weight: bold;
    `,
    Admin: {
        Container: styled.div`
            display: flex;
            flex-direction: column;
            justify-contnet: center;
            align-items: center;
            gap: 15px;
            font-size: 18px;
        `,
    },
    ModalContainer: styled.div`
        &:before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background: #000;
            opacity: 0.5;
            z-index: 3;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100vh;
        width: 100vw;
        z-index: 4;
    `,
    Label: styled.label`
        cursor: pointer;
        width: ${props => props.$width};
        margin-bottom: ${props => props.$marginBottom};
        text-align: ${props => props.$textAlign};
    `,

    LabelInput: styled.div`
        display: flex;
        justify-content: ${props => props.$justifyContent ?? 'space-evenly'};
        align-items: center;
        width: 100%;
        margin: 15px 0;
    `,
    InputLabelFile: {
        InputFile: styled.input`
            opacity: 0;
            visibility: hidden;
            position: absolute;
        `,
        Label: styled.label`
            width: 120px;
            height: 40px;
            background: #1bbc9b;
            color: #fff;
            font-size: 1.125rem;
            font-weight: 700;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: center;
            border-radius: 10px;
            cursor: pointer;
            margin: 0 auto;
        `,
        FilesContainer: styled.div`
            display: flex;
            flex-direction: column;
            width: 75%;
        `,
    },
    TextArea: styled.textarea`
        min-width: 400px;
        height: 200px;
        margin-left: 10px;
        border: 1px solid rgb(216, 216, 216);
        border-radius: 10px;
        padding: 10px;
        font-size: 18px;

        @media (max-width: 700px) {
            min-width: auto;
            max-height: 120px;
        }
    `,
    Profile: {
        SectionDetail: styled.div`
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            width: ${props => props.$sectionWidth};
            justify-content: center;
            align-items: center;

            @media (max-width: 700px) {
                width: 100%;
            }
        `,
        ProfilePhotoContainer: styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            width: 250px;
            height: 250px;
            overflow: hidden;
            border-radius: 50%;
        `,
        ProfileDetail: styled.div`
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            width: ${props => props.$detailWidth};
            margin-top: 20px;

            @media (max-width: 700px) {
                width: 100%;
            }
        `,
        ProfileDetailSpan: styled.span`
            margin-left: 5px;
            margin-top: 2px;
        `,
        ContainerBtns: styled.div`
            width: 250px;
            display: flex;

            @media (max-width: 700px) {
                width: 67%;
                padding-left: 15px;
            }
        `,
    },
    Main: styled.main`
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    `,
    Form: styled.form`
        background-color: white;
        border: 1px solid rgb(216, 216, 216);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        max-width: 600px;
        opacity: 1;
        z-index: 4;
    `,
    FormFile: styled.form`
        @media (max-width: 700px) {
            width: 33%;
        }
    `,
    SectionWrapper: styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto 30px;
        max-width: 1200px;
        background-color: white;
        padding: 15px;
        border-radius: 15px;
    `,
    Btn: {
        DefaultBtn: styled.button`
            background: ${props => props.$btnColor};
            color: white;
            height: 40px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            width: 80%;
            margin: 0 auto;
            font-size: 16px;
            &:hover {
                background: ${props => props.$btnHoverColor};
            }
        `,
        WhiteBtn: styled.button`
            background: white;
            color: black;
            border: 1px solid rgb(207, 207, 207);
            border-radius: 10px;
            padding-left: 5px;
            padding-right: 5px;
            cursor: pointer;
            height: 40px;

            &:hover {
                background: ${props => props.$isHover && '#ffa218'};
                color: ${props => props.$isHover && 'white'};
                border: none;
            }
        `,
    },
    Span: {
        BorderSpan: styled.span`
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid rgb(207, 207, 207);
            border-radius: 8px;
            padding: 5px;
            font-size: large;
        `,
    },

    Input: styled.input`
        width: ${props => props.width};
        height: 40px;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid rgb(216, 216, 216);
        border-radius: 8px;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none; // Yeah, yeah everybody write about it
        }

        ,
        &:hover,
        &:focus {
            appearance: none;
            -moz-appearance: textfield;
        }
    `,
    SeparateLine: styled.span`
        background-color: rgb(204, 204, 204);
        height: 1px;
        margin-bottom: 10px;
    `,
    BlackOrangeLink: styled.p`
        color: black;
        transition: all 0.2s;
        cursor: pointer;
        &:hover {
            color: #fc8507;
        }
    `,
    ItemListDetailStat: styled.div`
        display: flex;
        justify-content: start;
        margin-top: 10px;
    `,
    CrossButton: styled.span`
        position: relative;
        font-size: ${props => props.size};
        right: 10px;
        color: rgb(77, 77, 77);
        cursor: pointer;
        &:hover {
            color: rgba(0, 0, 0, 0.6);
        }
    `,
};

export default css;
