import React from 'react';

const Blogs = () => {
    return (
        <div className='rounded px-28 lg:mb-60'>
            <h1 className='text-center my-10 font-bold text-2xl'>Check Our Popular Blogs.</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                    #1 What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>#1 URL <br /><br />
                        We can use URL to store some data e.g.

                        The id of the current item, being viewed<br></br>
                        Filter parameters<br></br>
                        Pagination offset and limit<br></br>
                        Sorting data<br></br>
                        Keeping such data in the URL allows users to share deep links with others.<br></br><br></br>

                        It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change

                        React Router is a great tool to handle routes and manage the params.

                        <br /><br />

                        #2 Web Storage<br /><br />
                        The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.<br /><br />

                        Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.<br /><br />

                        We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.<br /><br />

                        Here is an example of saving user preferences locally in the browser or even persist the complete state for one or more of our components.

                        <br /><br />

                        #3 Lifted State<br /><br />
                        The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.<br /><br />

                        In the below example, we have lifted the state and the handleChange event in the parent component, helping to maintain consistency.

                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                    #2 How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types. <br /><br />

                        When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.<br /><br />

                        While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.<br /><br />

                        Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.<br /><br />
                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                    #3 What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>A unit test is a type of software test that focuses on components of a software product. The purpose is to ensure that each unit of software code works as expected. A unit can be a function, method, module, object, or other entity in an application’s source code.<br /><br />

                        The objective of a unit test is to test an entity in the code, ensure that it is coded correctly with no errors, and that it returns the expected outputs for all relevant inputs.<br /><br />

                        Unit tests are typically created by developers during the coding phase of a project, and are written as code that exists in the codebase alongside the application code it is testing. Many unit testing frameworks exist that help developers manage and execute unit tests.<br /><br />

                        How Unit Tests Work?<br /><br />
                        Unit tests usually consist of three phases:<br /><br />

                        Planning—developers consider which units in the code they need to test, and how to execute all relevant functionality of each unit to test it effectively.
                        Test cases and scripts—developers write the unit test code and prepare the scripts to execute the code.
                        Unit testing and results—finally, the unit test runs and developers can identify errors or issues in the code and fix them.
                        Test-driven development (TDD) is a common approach to unit testing. It requires the developer to create the unit test first, before the application code actually exists. Naturally, that initial test will fail. Then the developer adds the relevant functionality to the application until the tests pass. TDD usually results in a high quality, consistent codebase.
                    </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                    #4 React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular. <br />

                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                        They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                        Each framework is component-based and allows the rapid creation of UI features.

                        However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.

                        <br />
                        React<br /><br />
                        React doesn’t enforce a specific project structure, and as you can see from the official “Hello World” example below, you can start using React with just a few lines of code.

                        ReactDOM.render(
                        Hello, world!
                        document.getElementById('root')
                        );
                        React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                        React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                        Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.

                        React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.

                        Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.

                        Vue<br /><br /> 
                        The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                        Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.

                        Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.

                        Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.

                        SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.

                        Angular<br /><br />
                        In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.

                        AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                        Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                        Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.

                        Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.

                        Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.

                        Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;