# terotam_task

1. Create a sign up API that can add a user with a first name, lastname, mobile number , email and password,
2. Create a login functionality with the User table.
3. Create a Menu for the restaurant.
   - User can add categories of Menu( i.e. Pizza, Pasta, etc.)
   - User can add an item for that category (for example, in the Pizza category, there could be margarita Pizza, Cheese Pizza, Italian Pizza, etc.)
   - Also, users can upload a photo of that item
4. create an API to get category
5. create API to get menu items by category

Steps 3, 4, and 5 should not allow without a login. Check authentication before performing any request.

6. create cron job to migrate relational database table to mongodb collections,In the interval of 10 minutes sync the relational database with MongoDB. (Note. Don’t insert/update data in mongoDB at the time of inserting in relational database.)

note:-

- Please use Relational Database for point 1 to 6
- Please use Mongo Database for point 6
- create postman api collection and share that collection link
- upload your code in github and share that code link
