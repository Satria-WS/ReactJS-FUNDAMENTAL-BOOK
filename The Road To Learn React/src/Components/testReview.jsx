import React from "react";
import List from "../List/List"

class Review extends React.Component {
    render() {
        
        // ES5
        var userService1 = {
            getUserName: function (user) {
                return user.firstname + " " + user.lastname;
            },
        };
        // ES6
        var userService2 = {
            getUserName(user) {
                return user.firstname + " " + user.lastname;
            },
        };

        // ES5
        var user1 = {
            name: "Robin",
        };
        // ES6
        const key = "name";
        const user2 = {
            [key]: "Robin",
        };
        return (
            <>
                <h1>hello class</h1>
                <h1>{List[0].title}</h1>
                <p>{List[0].url}</p>
                <p>{List[0].author}</p>
                <p>{List[0].num_comments}</p>
                <p>{List[0].objectID}</p>

                {/* map iteration */}
                <h1>Map iteration</h1>
                {List.map(function (item) {
                    return <p>{item.url}</p>;
                })}
            </>
        );
    }
}

export default Review;
