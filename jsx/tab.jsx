/* global app
    global React
    global ReactDOM */
    
    
    app.tabComp = React.createClass({
       
       render: function(){
           console.log("tabComp", this.props);
           var itemsList = this.props.itemsList; 
           var tabLabel = this.props.tabLabel;
           var buttonLabel = this.props.buttonLabel;
           var handleRemoveItem = this.props.handleRemoveItem;
           var handleAddItem = this.props.handleAddItem;
           var updateGravatarUrl = this.props.updateGravatarUrl;
           var urlVal = this.props.urlVal;
           var updateValue = this.props.updateValue;
           var handleSubmit = this.props.handleSubmit;
           var nick = this.props.nick;
           var addForm = this.props.addForm;
           var url = this.props.url;
           
           return <div className = "tab">
                        <app.leftPaneComp handleAddItem = {handleAddItem} buttonLabel = {buttonLabel}
                                itemsList = {itemsList} tabLabel = {tabLabel} updateValue = {updateValue}
                                handleRemoveItem = {handleRemoveItem} handleSubmit = {handleSubmit} nick = {nick}
                                addForm = {addForm} url = {url}/>
                        <app.gravatarComp updateGravatarUrl = {updateGravatarUrl} urlVal = {urlVal}/>
                    </div>;
       }
       
    });
    

