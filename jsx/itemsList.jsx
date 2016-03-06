/* global app
    global React
    global ReactDOM */
    
    
app.item = React.createClass({
       
       render: function(){
           var handleRemoveItem = this.props.handleRemoveItem;
           var itemName = this.props.itemName;
           var itemUrl = this.props.itemUrl;
           
           return <div className = "itemClass">
                    <img src = {itemUrl}/>
                    <div className = "itemName">{itemName}</div>
                    <button className = "removeItem" name = {itemName} 
                            onClick = {handleRemoveItem}>Remove</button>
                </div>;
       }
    });


app.itemsComp = React.createClass({
       
       buildItems: function(item, index){
           var handleRemoveItem = this.props.handleRemoveItem;
            return <app.item key = {index} itemUrl = {item.itemUrl} itemName = {item.itemName} 
                            handleRemoveItem = {handleRemoveItem}/>  
       },
       
       render: function(){
           var itemsList = this.props.itemsList;
           return <div className = "itemListClass">
                        {itemsList.map(this.buildItems)}
                    </div>;
       }
    });