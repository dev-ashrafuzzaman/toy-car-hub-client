import useTitle from "../../hooks/useTitle";


const Blog = () => {
    useTitle('Blog')
    return (
        <div className="container mx-auto p-10 space-y-6">
            <div className="collapse collapse-plus bg-pink-100">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>
                        An access token is a credential that grants a client permission to access protected resources on behalf of a user. It is typically short-lived and included in API requests for authorization.

                        A refresh token is a credential used to obtain a new access token when the current one expires. It helps maintain continuous access without requiring the user to reauthenticate.

                        Access tokens are often stored in memory or browser session storage on the client-side, while refresh tokens require more secure storage, such as HTTP-only secure cookies, to prevent unauthorized access.

                        Together, access and refresh tokens enable secure and efficient authentication and authorization in token-based systems.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-pink-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are structured and follow a rigid schema, making them suitable for complex relationships and transactions. NoSQL databases are schema-less, offering flexibility and scalability for unstructured or semi-structured data. SQL is best for structured data and ACID compliance, while NoSQL is ideal for large-scale, distributed systems and handling high volumes of data.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-pink-100">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express.js is a minimalist web application framework for Node.js that allows developers to build web applications and APIs quickly and efficiently. It provides a simple, unopinionated approach to web development and offers a wide range of features and middleware for handling HTTP requests, routing, and creating server-side logic.

                        NestJS, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides an opinionated architecture inspired by Angular, making it suitable for developing large-scale, modular applications. NestJS leverages TypeScript and decorators for dependency injection, routing, and building reusable components, providing a robust and maintainable codebase.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-pink-100">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>MongoDB aggregate is a powerful method in MongoDB that allows for advanced data processing and analysis. It enables the aggregation framework to perform operations like grouping, filtering, sorting, and transforming data in a collection, using a pipeline of stages. Each stage modifies the data in some way, allowing complex computations and aggregations to be performed efficiently on large datasets.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;