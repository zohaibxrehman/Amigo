import React, { Component } from 'react';



class MakePost extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label for="inputTitle">Title</label>
                    <input type="text" className="form-control" id="inputTitle" placeholder="Try something like: Seeking Roomate or 2 bd room place."/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputPrice">Price</label>
                        <select id="inputPrice" className="form-control">
                                <option selected>Choose...</option>
                                <option value="">$0-$300</option>
                                <option value="">$330-$600</option>
                                <option value="">$600-$900</option>
                                <option value="">$900-$1200</option>
                                <option value="">$1200-$1500</option>
                                <option value="">$1500-$2000</option>
                                <option value="">$2000-$3000</option>
                                <option value="">$3000+</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputLocation">Location</label>
                        <select id="inputLocation" className="form-control">
                                <option selected>Choose...</option>
                                <option value="">Toronto</option>
                                <option value="">Waterloo</option>
                                <option value="">London</option>
                                <option value="">Vancouver</option>
                                <option value="">Ottawa</option>
                                <option value="">Montreal</option>
                                <option value="">Mississauga</option>
                                <option value="">Scarborough</option>
                        </select>
                    </div>

                   
                </div>
                <div className="form-group row">
                        <div className="col-sm-2">Preferences</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    Male
                                </label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    No Smoking
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    No Drinking
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    No Partying
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    No Pets
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    420 Friendly
                                </label>
                            </div>
                        </div>
                </div>
                <div className="form-group">
                        <label for="inputDescription">Description:</label>
                        <textarea class="form-control rounded-0" id="inputDescription" rows="10" 
                        placeholder="Try Something Like:&#13;&#13;Unit: One bedroom for rent in a 2 bedroom basement apartment in Harbord Village, starting November 1, 2020.&#10;Price: $1150 (includes internet + utilities).&#10;First and last month’s rent required.&#10;Rent Control: Unit was used for residential purposes prior to Nov 15 2018.&#10;Location: Bathurst and Harbord&#10;Relationship to unit: Current tenant seeking roommate.&#10;Lease Term: 12 months, preferably" >
                        </textarea>
                        
                </div>
                <div class="form-group">
                    <label for="uploadFile">Upload photos</label>
                    <input type="file" className="  form-control-file" id="uploadFile" />
                </div>
                
                <button type="submit" className="btn btn-warning btn-block">Submit</button>
            </form>


         );
    }
}
 
export default MakePost;