# Express

### Model-View-Controller

&emsp;MVC is a design pattern commonly used in software development, particularly in web application development. MVC helps to organize and separate different concerns within an application, making it more maintainable and scalable. 

**Model:**
+ It represents the data and the business logic of the application.
+ It is responsible for managing the state, data storage, and the rules and operations that apply to that data.
+ In a web application context, models often interact with databases to retrieve and manipulate data.
+ Models notify the View when data changes, allowing the View to update accordingly.

**View:**
+ It represents the user interface (UI) and how data is presented to the user.
+ It is responsible for rendering the data from the Model to the user in a way that is visually appealing and user-friendly.
+ It does not contain business logic; its main purpose is to display information and interact with user input.
+ In web applications, views are typically HTML templates combined with data from the Model.

**Controller:**
+ It acts as an intermediary between the Model and the View.
+ It receives user input and decides how to handle it, which may involve updating the Model and/or updating the View.
+ Controllers contain the application's logic, including handling user requests, making decisions based on that input, and updating the Model or View accordingly.
+ In web applications, controllers are responsible for defining routes and handling HTTP requests.

#### Here's how the MVC pattern works in a typical web application flow:
1. A user interacts with the application through the UI (View).
2. The View sends user input or requests to the Controller.
3. The Controller processes the input, interacts with the Model as needed (e.g., querying a database or updating data), and decides which View should be rendered.
4. The Controller updates the View with the necessary data from the Model.
5. The View displays the updated data to the user.
6. If the user interacts further, the cycle repeats.

#### Advantages of using the MVC pattern include:

+ **Separation of Concerns:**
  - MVC enforces a clear separation of responsibilities between data management, UI, and application logic.
  - This makes the codebase more organized and easier to maintain.
+ **Reusability:**
  - Because components are separated, you can reuse Models, Views, or Controllers in different parts of the application or in other projects.
+ **Testability:**
  - Each component (Model, View, and Controller) can be tested independently, making it easier to write unit tests for your application.
+ **Scalability:**
  - MVC allows you to scale your application by adding new views, models, or controllers without needing to overhaul the entire codebase.

&emsp;MVC is a fundamental pattern in web development, but variations and extensions exist, such as MVVM (Model-View-ViewModel) and MVP (Model-View-Presenter), tailored to specific needs and frameworks. The choice of which pattern to use depends on the requirements and architecture of your project.


## [ROUTES](https://github.com/SKindij/Node.js-Basics/tree/main/Express/ROUTES)

**An example of a simple project on this topic:**

```go
📁 ROUTES/
│
├─ package.json
├─ app.js
│
├─ 📁 controllers/
│   ├─ comments.js
│   ├─ users.js
│   └─ root.js
│
└─ 📁 routes/
    ├─ comments.js
    ├─ users.js
    ├─ root.js
    └─ index.js
```







