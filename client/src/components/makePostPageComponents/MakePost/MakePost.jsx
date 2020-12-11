import React, { Component } from 'react';
import { addPost } from '../../../actions/post';

class MakePost extends Component {

    constructor() {
        super()
        this.state = {
            inputTitle: '',
            inputPrice: '',
            inputLocation: '',
            preferences: [],
            inputDescription: '',
            photo: null
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        addPost(this,e)
    }

    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        // const value = target.value;
        const name = target.id;
        if(name === "photo"){

            this.setState(
                {[name]: target.files[0]
                });
        }
        this.setState({
            [name]: target.value 
          });
    }

    checkboxChangeHandler = (e) => {
        // e.preventDefault();
        const { preferences } = this.state
        const target = e.target;
        const value = target.value;
        let updatedPreferences = preferences
        if(target.checked){
            updatedPreferences.push(value)
        }
        else{
            updatedPreferences = preferences.filter((preference)=> preference !== value)
        }

        this.setState({
            preferences: updatedPreferences
        });
    }
    

    render() { 
        const { inputTitle, inputPrice, inputLocation, inputDescription } = this.state
        return ( 

            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="inputTitle">Title</label>
                    <input type="text" className="form-control" id="inputTitle" placeholder="Try something like: Seeking Roomate or 2 bd room place." value={ inputTitle } onChange = { this.changeHandler }/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPrice">Price</label>
                        <select id="inputPrice" className="form-control" value={ inputPrice} onChange = { this.changeHandler } >
                                <option defaultValue>Choose...</option>
                                <option >$0-$300</option>
                                <option >$330-$600</option>
                                <option >$600-$900</option>
                                <option >$900-$1200</option>
                                <option >$1200-$1500</option>
                                <option >$1500-$2000</option>
                                <option >$2000-$3000</option>
                                <option >$3000+</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputLocation">Location</label>
                        <select id="inputLocation" className="form-control" value={ inputLocation} onChange = { this.changeHandler }>
                                <option defaultValue>Choose...</option>
                                <option >Toronto</option>
                                <option >Waterloo</option>
                                <option >London</option>
                                <option >Vancouver</option>
                                <option >Ottawa</option>
                                <option >Montreal</option>
                                <option >Mississauga</option>
                                <option >Scarborough</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                        <div className="col-sm-2">Preferences</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"  value="Male" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Female" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Student" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    Student
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Professional" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    Professional
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Elderly" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    Elderly
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="No Smoking" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    No Smoking
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="No Drinking" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    No Drinking
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="No Partying" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    No Partying
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="No Pets" onChange={this.checkboxChangeHandler} />
                                <label className="form-check-label" >
                                    No Pets
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="420 Friendly" onChange={this.checkboxChangeHandler}/>
                                <label className="form-check-label" >
                                    420 Friendly
                                </label>
                            </div>
                        </div>
                </div>
                <div className="form-group">
                        <label htmlFor="inputDescription">Description:</label>
                        <textarea className="form-control rounded-0" id="inputDescription" rows="10" 
                        placeholder="Try Something Like:&#13;&#13;Unit: One bedroom for rent in a 2 bedroom basement apartment in Harbord Village, starting November 1, 2020.&#10;Price: $1150 (includes internet + utilities).&#10;First and last month’s rent required.&#10;Rent Control: Unit was used for residential purposes prior to Nov 15 2018.&#10;Location: Bathurst and Harbord&#10;Relationship to unit: Current tenant seeking roommate.&#10;Lease Term: 12 months, preferably" value={ inputDescription } onChange = { this.changeHandler } />
                </div>
                <div className="form-group">
                    <label htmlFor="uploadFile">Upload photos</label>
                    <input type="file" name='image' className="  form-control-file" id="photo" onChange={this.changeHandler}/>
                </div>
                <button type="submit" className="btn btn-warning btn-block">Submit</button>
            </form>
         );
    }
}
 
export default MakePost;