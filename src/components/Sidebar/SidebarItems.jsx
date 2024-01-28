import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import Contact from "./Contact";
import Mail from "./Mail";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Notifications />
			<CreatePost />
			<ProfileLink />
			<Contact />
			<Mail />
			
		</>
	);
};

export default SidebarItems;
