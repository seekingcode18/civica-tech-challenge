# Civica Technical Challenge
This was an enjoyable full stack challenge. Please see instructions and approach below.

## Instructions
1. `npm install`
2. `npm run server:start` (the server will run on port 8080)
3. `npm run client:start` (the server will run on port 1234)
4. Visit http://localhost:1234/

## Approach
This was an enjoyable task. I started by creating the route in the server. I decided to use the repository pattern so that the logic of interacting with the file system was abstracted away from the routing logic. After setting up the server, I worked on the front end logic to display a list of users from the aforementioned route. I opted to use React hooks (useState and useEffect) with the Fetch API to get the data. I created components for the form, list and items, passing down properties as required. I then adding the additional feature of filtering/searching (see below for discussion*). Finally, I added the styles using a global stylesheet.

## Next Steps
If I had more time, I would implement the following features (see below for discussion).

### *Filtering / Searching
I implemented this on the front end. If there were more records (e.g. 1,000 or more) I would opt to do the filtering on the backend and return the result asyncronously. I would limit the back end search to only be triggered after the user has typed 2 or 3 characters (the number of characters typed would be stored in state). Any calls of this size would also be best done to a database instead of the file system. If the number of records was extremely large (1,000,000+), a database that implements caching should be considered.

### Sorting the personnel by name
Sorting by name could take place on the front end as this may be quicker than making a call to the backend and awaiting a response. If there is a large amount of data, however, filtering on the backend may be preferable. Either way, the logic would be similar: the filter method would be applied to the array of personnel, returning only those that contain a matching name (e.g. `personnel.filter`). If this were on the front end, the new array would be passed into state so that it was maintained throughout the app.

### Tests
On the backend, the `/api/personnel` route could be tested to ensure that it returns the correct status code (200) and that it returns a list of personnel (TypeScript could help with this). On the frontend, unit tests could be written to check that each component is rendered with the correct elements and properties (e.g. after a mock API call).

### Error handling
Basic error handling has been implemented. On the backend, if the repository fails to return data, a 400 code and an error object will be returned. On the front end, the list of personnel is only displayed if the data is present. This could be improved by displaying a relevant message when there is no data. On the backend, error handling could be improved so that error codes and messages are more descriptive of particular errors.

### State management
A tool like Redux could be implemented to manage all the front end state. This would have the advantage of state not being passed down to child components as props, and ensuring that state is up to date across the entire application.

### Deleting personnel (without mutating the original `json` file)
If there is only a small number of records, they could be read into memory, and this array could be mutated. If there is a significant number of records, however, they should be loaded into a database and then records could be deleted there (the `.json` file would be treated as a seed file in this scenario).
