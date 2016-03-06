/* global app
    global React
    global ReactDOM */
    
    
    app.formComp = React.createClass({
       
       render: function(){
           var nick = this.props.nick;
           var url = this.props.url;
           var updateValue = this.props.updateValue;
           var handleSubmit = this.props.handleSubmit;
           var duplicateMessage = "Please don't add duplicates";
           
           return <div>
                    <section className = "hidden" id = "duplicate">
                        <h4> {duplicateMessage} </h4>
                    </section>
                    <table>
                        <tbody>
                            <tr> 
                                <td><label htmlFor = "nickName"> Nick</label></td>
                                <td><input id = "nickName" ref = "nickName" type = "text" value = {nick}
                                            onChange = {updateValue}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor = "gravatar" > Url</label></td>
                                <td><input id = "gravatar" ref = "gravatar" type = "text" value = {url} 
                                        onChange = {updateValue}/></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type = "submit" onClick = {handleSubmit}/> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>;
       }
    });