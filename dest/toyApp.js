/* React application */

var app = app || {};

var React = require('react');
var ReactDOM = require('react-dom');

app.items = {};
var self = this;
    // Dummy tabs
    app.tabs = ["People", "Places", "Animals", "Things"];
    
    // To track info
    app.tabContent = {};
    app.tabContent.People = {};
    app.tabContent.Places = {};
    app.tabContent.Animals = {};
    app.tabContent.Things = {};
    
    
    self.tabs = app.tabs;

    self.sucCalBack = function(){
        //console.log("people --> ", app.items.People);
        
        ReactDOM.render(React.createElement(app.toyApp, {
                                                            tabs: self.tabs, 
                                                            defaultItemsList: app.items.People, 
                                                            defaultTab: "People"}),
                        document.getElementById('toyApp'));
    };


    $.ajax({
      url: "items.json",
    }).done(function(response) {
    
      //console.log("reponse --> ", response);
      app.items.People = response.People;
      app.items.Places = response.Places;
      app.items.Animals = response.Animals;
      app.items.Things = response.Things;
      
      self.sucCalBack();
    });
    
    
    
    
    
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
    


/* global app
    global React
    global ReactDOM */
    
    //console.log(" ready top render ");
    

/*ReactDOM.render(<app.formComp urlVal = "http://" nick = "nick" />, document.getElementById('toyApp'));*/
/* global app
    global React
    global ReactDOM */
    
    
    app.tabComp = React.createClass({displayName: "tabComp",
       
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
           
           return React.createElement("div", {className: "tab"}, 
                        React.createElement(app.leftPaneComp, {handleAddItem: handleAddItem, buttonLabel: buttonLabel, 
                                itemsList: itemsList, tabLabel: tabLabel, updateValue: updateValue, 
                                handleRemoveItem: handleRemoveItem, handleSubmit: handleSubmit, nick: nick, 
                                addForm: addForm, url: url}), 
                        React.createElement(app.gravatarComp, {updateGravatarUrl: updateGravatarUrl, urlVal: urlVal})
                    );
       }
       
    });
    


/* global app
    global React
    global ReactDOM */
    
    
    app.toyApp = React.createClass({displayName: "toyApp",
       
       addTabs: function(tabItem, index){
         return React.createElement("div", {className: "tabDiv", key: index, onClick: this.handleTabChange}, " ", tabItem, " ");
       },
       
       componentDidMount: function(){
            this.reLoadInfo();
       },
       
       checkIfExists: function(obj, label){
            var itemsList = app.items[label];
            var i = 0, j = itemsList.length;
            for(;i < j; i++){
             if(itemsList[i].itemName === obj)
                return i;
            }
            return -1;
       },
       
       
       getInitialState: function(){
            return {
                tabs: this.props.tabs || [],
                buttonLabel: this.props.buttonLabel || "Add People",
                tabLabel: this.props.defaultTab || "",
                itemsList: this.props.defaultItemsList || [],
                addForm: false,
                nick: "",
                url: "",
                urlVal: ""
            }       
       },
       
       handleAddItem: function(event){
           // Hide message
           $('#duplicate').hide();
           this.setState({
              addForm : true  
           });
           app.tabContent[this.state.tabLabel].addForm = true;
           
       },
       
       handleRemoveItem: function(event){
           
           var index = this.checkIfExists(event.target.name, this.state.tabLabel);
           app.items[this.state.tabLabel].splice(index, 1);
           this.forceUpdate();    
       },
       
       handleSubmit: function(event){
           
            var obj = {
                        "itemName": this.state.nick.trim(),
                        "itemUrl": this.state.urlVal.trim()
                      };
            if(this.checkIfExists(obj.itemName, this.state.tabLabel) === -1)
            {
                app.items[this.state.tabLabel].push(obj);
                $('#addItemForm').addClass('hidden');
                this.setState({
                  addForm : false
               });
              
            }
            else{
                $('#duplicate').show();
            }
       },
       
       handleTabChange: function(event){
            
            
            var textContent = event.target.textContent.trim();
            this.state.tabLabel = textContent;
            this.reLoadInfo();
            var content = app.tabContent[this.state.tabLabel];
            var nickVal = content.nick;
            var url = content.url;
            var urlVal = content.urlVal;
            var addForm = content.addForm;
            
            this.setState({
                            tabLabel: textContent,
                            buttonLabel: "Add "+textContent,
                            itemsList: app.items[textContent],
                            addForm: addForm,
                            nick: nickVal,
                            urlVal: urlVal,
                            url: url
            });
            
       },
       
       reLoadInfo: function(){
           
            var tabLabel = this.state.tabLabel;
            var label = app.tabContent[tabLabel];
            app.tabContent[tabLabel].addForm = (label.addForm !== undefined) ? label.addForm : false;  
            app.tabContent[tabLabel].nick = label.nick ? label.nick: "";
            app.tabContent[tabLabel].urlVal =  label.urlVal ? label.urlVal: "" ;
            app.tabContent[tabLabel].url =  label.url ? label.url: "" ;
       },
       
       
       render: function(){
           
           var items = this.state.itemsList;
           var buttonLabel = this.state.buttonLabel;
           var tabLabel = this.state.tabLabel;
           var urlVal = this.state.urlVal;
           var url = this.state.url;
           var nick = this.state.nick;
           var addForm = this.state.addForm;
           var appName = "My Favourite Things";
           console.log("toyApp state -->", this.state);
           
           return React.createElement("div", {className: "toyApp"}, 
                    React.createElement("div", {className: "banner"}, appName), 
                    React.createElement("div", {className: "tabGroup"}, this.state.tabs.map(this.addTabs)), 
                    React.createElement("div", {className: "tabContent", id: "tabContent"}, 
                        React.createElement(app.tabComp, {itemsList: items, buttonLabel: buttonLabel, updateValue: this.updateValue, 
                                    handleSubmit: this.handleSubmit, tabLabel: tabLabel, updateGravatarUrl: this.updateGravatarUrl, 
                                    nick: nick, addForm: addForm, handleRemoveItem: this.handleRemoveItem, 
                                    handleAddItem: this.handleAddItem, urlVal: urlVal, url: url})
                    )
                );
       },
       
       updateGravatarUrl: function(event){
           if(event.target.value){
            this.setState({urlVal: event.target.value});
            app.tabContent[this.state.tabLabel].urlVal = event.target.value;
           }
           
       },
       
       updateValue: function(event){
           console.log(" updateValue ", event);
           var targetId = event.target.id;
           if(targetId === "nickName"){
               
               this.setState({nick : event.target.value});
               app.tabContent[this.state.tabLabel].nick = event.target.value;
           }else{
               this.setState({url : event.target.value});
               app.tabContent[this.state.tabLabel].url = event.target.value;
           }
       }
       
    });
    

