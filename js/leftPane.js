/* global app
    global React
    global ReactDOM */
    
    
    app.leftPaneComp = React.createClass({displayName: "leftPaneComp",
       
       render: function(){
            
            var tabLabel = this.props.tabLabel;
            var buttonLabel = this.props.buttonLabel;
            var itemsList = this.props.itemsList;
            var handleAddItem = this.props.handleAddItem;
            var handleRemoveItem = this.props.handleRemoveItem;
            var nick = this.props.nick;
            var addForm = this.props.addForm;
            var urlVal = this.props.urlVal;
            var url = this.props.url;
            var updateValue = this.props.updateValue;
            var handleSubmit = this.props.handleSubmit;
            
            var style = addForm ? {display: 'block'} : {display: 'none'};                 
           return React.createElement("div", {className: "leftPane"}, 
                        React.createElement("div", {className: "itemsList"}, 
                            React.createElement("button", {className: "add", name: tabLabel, 
                                    onClick: handleAddItem}, buttonLabel), 
                            React.createElement("br", null), 
                            React.createElement("div", {className: "form", style: style, id: "addItemForm"}, 
                                React.createElement(app.formComp, {updateValue: updateValue, handleSubmit: handleSubmit, 
                                            nick: nick, url: url})
                            ), 
                            React.createElement("br", null), 
                            React.createElement(app.itemsComp, {itemsList: itemsList, 
                                        handleRemoveItem: handleRemoveItem})
                        )
                        
                    );
       }
    });
    

