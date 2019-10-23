# back-end

ENDPOINT DOCUMENTATION

Returns a list of all users:
GET /users
No Body Required

Returns a user by their id number:
GET /users/:id
No Body Required

Returns the trips of a given user by their user id number:
GET /users/:id/trips
No Body Required

Creates a new trip for a user by their user id number:
POST /users/:id/trips
Data Structure:
  {
    "title": "Beach",
    "image": "imgurl",
    "description": "Beautiful sandy beach",
    "isPrivate": true,                  <----Boolean
    "isProfessional": false,            <----Boolean
    "duration": "2 days",
    "distance": "5 miles",
    "date": "11/23/19",                 <----Date
    "tripType": "Excursion"
  }


Returns the profile of a user based on their user id number:
GET /users/:id/profile 
No Body Required

Creates a profile based associated with user id number:
POST /users/:id/profile
Data Structure:
  {
    "title": "Mountain Man",
    "tagline": "I like Mountains",
    "guideSpecialty": "Climbing",
    "age": 60,                          <---Number
    "yearsExperience": 5                <---Number
  }


Creates a user: 
POST /users/register
Data Structure:
{
	"username":"Bob",
	"password":"password"
}


Allows user to login:
POST /users/login
Data Structure:
{
	"username":"Bob",
	"password":"password"
}

Returns a list of all the trips:
GET /trips
No Body Required

Returns a trip based on trip id number:
GET /trips/:id
No Body Required

Deletes a trip based on the trip id number:
DELETE /trips/:id
No Body Required

Edits a trip based on the trip id number:
PUT /trips/:id
Data structure:
{
  "title": "Sahara",
  "image": "imgurl",
  "description": "Trip description",
  "isPrivate": 0,                            <--- Boolean
  "isProfessional": 1,                       <--- Boolean
  "duration": "3 days",
  "distance": "10 miles",
  "date": "11/30/19",                        <--- Date
  "tripType": "RelaxingUpdated"
}


Returns a list of all the profiles on the website:
GET /profiles
No Body Required

Returns a profile based on the profile id number:
GET profiles/:id
No Body Required

Edits a profile based on the profile id number:
PUT /profiles/:id
Data structure:
{
  "title": "Profile Title",
  "tagline": "Profile Tagline",
  "guideSpecialty": "Guide's specialty",
  "age": 55,                                <--- number
  "yearsExperience": 5                      <--- number
}


Deletes a profile based on the profile id number:
DELETE /profiles/:id 
No Body Required

Will's change to push