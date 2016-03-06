/* global app
    global React
    global ReactDOM */
    
    
    app.gravatarComp = React.createClass({displayName: "gravatarComp",
       
       render: function(){
           
           var updateGravatarUrl = this.props.updateGravatarUrl;
           var urlVal = this.props.urlVal;
           
           return React.createElement("div", {className: "gravatar"}, 
                        React.createElement("table", null, 
                            React.createElement("tbody", null, 
                                React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                        React.createElement("label", {htmlFor: "gravatarUrl"}, "Gravatar: ")
                                    ), 
                                    React.createElement("td", null, 
                                        React.createElement("input", {id: "gravatarUrl", value: urlVal, onChange: updateGravatarUrl, 
                                        type: "text"})
                                    )
                                ), 
                                React.createElement("tr", null, React.createElement("td", {colSpan: "2"})), 
                                React.createElement("tr", null, 
                                    React.createElement("td", {colSpan: "2"}, "Type URL to see image below ")
                                ), 
                                React.createElement("tr", null, 
                                    React.createElement("td", {colSpan: "2"}, React.createElement("img", {src: urlVal}))
                                )
                           )
                        )
                    );
       }
    });
    

