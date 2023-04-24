import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

export const metadata = {
  title: "Menu of Milestones Grill",
};

export default function RestaurantMenu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
    </>
  );
}
