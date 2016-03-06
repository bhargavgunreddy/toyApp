/* global app
    global React
    global ReactDOM */
    
    
    app.leftPaneComp = React.createClass({
       
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
           return <div className = "leftPane">
                        <div className = "itemsList">
                            <button className = "add" name = {tabLabel} 
                                    onClick = {handleAddItem}>{buttonLabel}</button>
                            <br/>
                            <div className = "form" style = {style} id = "addItemForm">
                                <app.formComp updateValue = {updateValue} handleSubmit = {handleSubmit}
                                            nick = {nick} url = {url} />
                            </div>
                            <br/>
                            <app.itemsComp itemsList = {itemsList} 
                                        handleRemoveItem = {handleRemoveItem}/>
                        </div>
                        
                    </div>;
       }
    });
    

