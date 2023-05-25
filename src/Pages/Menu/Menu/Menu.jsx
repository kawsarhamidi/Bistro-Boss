import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import drinksImg from '../../../assets/menu/menu-bg.png'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't miss" heading="today's offer"></SectionTitle>
            {/* offer menu */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu */}
            <MenuCategory
                items={desserts}
                title="desserts"
                img={dessertImg}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                title={"pizza"}
                img={pizzaImg}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title={"soup"}
                img={soupImg}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                title={"salad"}
                img={saladImg}
            ></MenuCategory>
            <MenuCategory
                items={drinks}
                title={"drinks"}
                img={drinksImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;