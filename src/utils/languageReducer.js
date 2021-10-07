const languageReducer = (routeName) => {
	if (routeName === "C++") {
		return "cpp";
	} else if (routeName === "C#") {
		return "csharp";
	}
	return routeName.toLowerCase();
};

export default languageReducer;
 

