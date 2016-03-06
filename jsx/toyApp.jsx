/* global app
    global React
    global ReactDOM */
    
    
    app.toyApp = React.createClass({
       
       addTabs: function(tabItem, index){
         return <div className = "tabDiv" key = {index} onClick = {this.handleTabChange}> {tabItem} </div>;
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
           
           return <div className = "toyApp">
                    <div className = "banner">{appName}</div>
                    <div className = "tabGroup">{this.state.tabs.map(this.addTabs)}</div>
                    <div className = "tabContent" id = "tabContent">
                        <app.tabComp itemsList = {items} buttonLabel = {buttonLabel} updateValue = {this.updateValue} 
                                    handleSubmit = {this.handleSubmit} tabLabel = {tabLabel} updateGravatarUrl = {this.updateGravatarUrl}
                                    nick = {nick} addForm = {addForm} handleRemoveItem = {this.handleRemoveItem} 
                                    handleAddItem = {this.handleAddItem} urlVal = {urlVal} url = {url}/>
                    </div>
                </div>;
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
    

