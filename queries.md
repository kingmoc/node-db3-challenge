# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
    SELECT p.ProductName, c.CategoryName
    FROM [Products] as p
    join [Categories] as c
	    on p.CategoryID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
    SELECT o.orderid, s.shippername, o.orderdate
    FROM [Orders] as o
    join [shippers] as s
        on o.shipperid = s.shipperid
        where o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
    SELECT p.productname, o.quantity
    FROM [OrderDetails] o 
    join [products] p
        on o.productid = p.productid
        where o.orderid = 10251
        order by p.productname

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
    SELECT o.orderid, c.customername, e.lastname Employee_Lastname
    FROM [Orders] o
    join [customers] c
    join [employees] e
        on o.customerid = c.customerid and o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
    SELECT c.categoryname, count(*) as count
    FROM [Products] p
    join [categories] c
        on p.categoryid = c.categoryid
        group by c.categoryname
        order by count desc

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 