/* global app
    global React
    global ReactDOM */
    
    
app.item = React.createClass({displayName: "item",
       
       render: function(){
           var handleRemoveItem = this.props.handleRemoveItem;
           var itemName = this.props.itemName;
           var itemUrl = this.props.itemUrl;
           
           return React.createElement("div", {className: "itemClass"}, 
                    React.createElement("img", {src: itemUrl}), 
                    React.createElement("div", {className: "itemName"}, itemName), 
                    React.createElement("button", {className: "removeItem", name: itemName, 
                            onClick: handleRemoveItem}, "Remove")
                );
       }
    });


app.itemsComp = React.createClass({displayName: "itemsComp",
       
       buildItems: function(item, index){
           var handleRemoveItem = this.props.handleRemoveItem;
            return React.createElement(app.item, {key: index, itemUrl: item.itemUrl, itemName: item.itemName, 
                            handleRemoveItem: handleRemoveItem})  
       },
       
       render: function(){
           var itemsList = this.props.itemsList;
           return React.createElement("div", {className: "itemListClass"}, 
                        itemsList.map(this.buildItems)
                    );
       }
    });