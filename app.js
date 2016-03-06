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
    
    
    
    
    