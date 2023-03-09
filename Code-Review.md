This section is a code review for the HTML file.

1. My first suggestion would be to not use inline styling. It may not be a good practice and can make the code look cluttered. So I would remove all the inline styling and add it to a separate css file.
   2.This Script is using an older version so would update the code into a more mordern framework like React.

For the second section code I can honestly say I don't have much experience with code that looks like this and none at all with VB.NET but this is based off what I know and just general coding practices.

1. Code duplication: The GetFormData method has a lot of code duplication for string replacement. This can be extracted out to a separate method and reused.
2. Hardcoded values: There are a lot of hardcoded values in the code, such as https://mws.amazonservices.com, which should be moved to a configuration file or environment variable.
3. Magic strings: There are several magic strings in the code, such as "Products", "auto", and "run_type". These should be replaced with constants or enums.
4. Naming conventions: The variable names in the code violate naming conventions. For example, the SKUListString variable should be named skuListString.
   5.Refactoring: The GetFormData method is doing too many things. It should be refactored into smaller methods with clear responsibilities.
   6.Use parameterized queries instead of building SQL strings: The current implementation is vulnerable to SQL injection attacks.
   7.Separate SQL queries from code: Consider storing the SQL queries in separate SQL script files or in a resource file, rather than including them directly in the code. This can make it easier to manage the queries and change them if necessary.
   8.Improve code readability: The code contains a lot of SQL string concatenation that makes it pretty hard to read. You could try using string interpolation or separate variables for the SQL parts to make it easier to understand what the query is doing.
   9.Use LINQ or a query builder: Rather than building the SQL queries manually, you could use a LINQ query to create the queries. This can make the code easier to read.
   10.Remove unnecessary comments and debugging code: There are several commented-out lines of code and comments that may not be necessary. Removing these can make the code easier to read and understand.

Overall the code is way too long and very hard to look at and could be split up to make it easier to look at and debug if there was some kind of issue.
