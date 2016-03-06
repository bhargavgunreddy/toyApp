/* global app
    global React
    global ReactDOM */
    
    
    app.gravatarComp = React.createClass({
       
       render: function(){
           
           var updateGravatarUrl = this.props.updateGravatarUrl;
           var urlVal = this.props.urlVal;
           
           return <div className = "gravatar">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor = "gravatarUrl">Gravatar: </label>
                                    </td>
                                    <td>
                                        <input id = "gravatarUrl" value = {urlVal} onChange = {updateGravatarUrl} 
                                        type = "text"/>
                                    </td>    
                                </tr>
                                <tr><td colSpan = "2"></td></tr>
                                <tr>
                                    <td colSpan = "2">Type URL to see image below </td>
                                </tr>
                                <tr>
                                    <td colSpan = "2"><img src = {urlVal}/></td>
                                </tr>
                           </tbody>
                        </table>
                    </div>;
       }
    });
    

