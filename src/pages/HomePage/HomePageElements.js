import styled from "styled-components";
import {colours} from "../../values/Colours";
import { fontSizes } from "../../values/FontSizes";
import blobs from "../../components/images/pricing-blob-scene.svg";
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import SortIcon from '@material-ui/icons/Sort';
import { Link as LinkR } from 'react-router-dom'
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import UpdateTwoToneIcon from '@material-ui/icons/UpdateTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

export const LayoutContentPage = styled.div`
  padding: 80px;
`;

export const HomePageContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  background: #fff;
  font-family: "Karla", sans-serif;
  margin: auto;
  margin-top: 70px;
  padding: 0 70px;
  font-family: "Karla", sans-serif;
  background-image: url(${blobs});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  align-items: stretch;
  overflow-y: scroll;
`

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    font-size: ${fontSizes.HEADER};
    color: ${colours.GRAY2};
`;

export const SubHeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 1rem;
    font-size: ${fontSizes.SUBHEADER};
    color: ${colours.GRAY6};
    font-weight: bold;
`

export const SearchText = styled.div`
    display: flex;
    justify-content: space-between;
    width: 650px;
`

export const SortIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
`

export const SortAlphaIcon = styled(SortByAlphaIcon)`
    color: ${colours.GRAY2};
`
export const SortOldNew = styled(SortIcon)`
    color: ${colours.GRAY2};
`
/** TABLE ELEMENTS */
export const CategoryCard = styled.div`
    height: auto;
    width: auto;
    margin-bottom: 40px;
    border-radius: 20px;
    border: 0.1px solid ${colours.GRAY6};
`;

export const WidgetLgUser = styled.td`
  text-align: left;
  color: ${colours.GRAY2};

`

export const WidgetLgImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
export const WidgetLg = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 40px;
    margin-left: 20px;
    margin-right: 20px;
    height: 350px;
    overflow-x: hidden;
`

export const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`

export const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`

export const WidgetLgTh = styled.th`
  text-align: left;
  color: ${colours.GRAY2};

`

export const WidgetLgTr = styled.tr`
`

export const WidgetLgAmount = styled.td`
    color: ${colours.GRAY2};
`

export const WidgetLgLink = styled(LinkR)`
    color: ${colours.GRAY2};
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
        color: ${colours.BLUE1};
        transition: 0.3s ease-out;
        transform: scale(1.2);
        cursor: pointer;
        font-weight: bold;
      }
`

export const WidgetLgDetailsLink = styled(LinkR)`
    color: ${colours.GRAY2};
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
        color: ${colours.RED};
        transition: 0.3s ease-out;
        transform: scale(1.2);
        cursor: pointer;
        font-weight: bold;
      }
`

export const WidgetLgDate = styled(LinkR)`
    color: ${colours.GRAY2};
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    font-size: ${fontSizes.SUBTEXT};

    &:hover {
        color: ${colours.BLUE1};
        transition: 0.3s ease-out;
        transform: scale(1.2);
        cursor: pointer;
        font-weight: bold;
      }
`

export const WidgetCategoryLink = styled(LinkR)`
    font-weight: 300;
    color: ${colours.GRAY2};
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;


    &:hover {
        color: ${colours.BLUE1};
        transition: 0.3s ease-out;
        transform: scale(1.2);
        cursor: pointer;
        font-weight: bold;
      }

`

export const WidgetThreadLink = styled(LinkR)`
    font-weight: 300;
    color: ${colours.GRAY2};
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;


    &:hover {
        color: ${colours.BLUE1};
        transition: 0.3s ease-out;
        transform: scale(1);
        cursor: pointer;
        font-weight: bold;
      }

`
export const DeleteIcon = styled(DeleteForeverTwoToneIcon)``

export const UpdateIcon = styled(UpdateTwoToneIcon)``

export const CreateIcon = styled(AddCircleTwoToneIcon)``

export const PgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
`