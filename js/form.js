/* global app
    global React
    global ReactDOM */
    
    
    app.formComp = React.createClass({displayName: "formComp",
       
       render: function(){
           var nick = this.props.nick;
           var url = this.props.url;
           var updateValue = this.props.updateValue;
           var handleSubmit = this.props.handleSubmit;
           var duplicateMessage = "Please don't add duplicates";
           
           return React.createElement("div", null, 
                    React.createElement("section", {className: "hidden", id: "duplicate"}, 
                        React.createElement("h4", null, " ", duplicateMessage, " ")
                    ), 
                    React.createElement("table", null, 
                        React.createElement("tbody", null, 
                            React.createElement("tr", null, 
                                React.createElement("td", null, React.createElement("label", {htmlFor: "nickName"}, " Nick")), 
                                React.createElement("td", null, React.createElement("input", {id: "nickName", ref: "nickName", type: "text", value: nick, 
                                            onChange: updateValue}))
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, React.createElement("label", {htmlFor: "gravatar"}, " Url")), 
                                React.createElement("td", null, React.createElement("input", {id: "gravatar", ref: "gravatar", type: "text", value: url, 
                                        onChange: updateValue}))
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, 
                                    React.createElement("input", {type: "submit", onClick: handleSubmit})
                                )
                            )
                        )
                    )
                    );
       }
    });