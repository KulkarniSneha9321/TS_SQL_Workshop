-- add order in order table for product and write the query in function to return all the order placed in give date range

create table orders(productid int primary key, productname char(10), customerid int,orderdate date, quantity int);

insert into orders (productid,productname,customerid,orderdate,quantity) values (122,'Airpods300',1222,'2024-07-04',1),(123,'Boat',1223,'2024-07-05',2),(124,'Rockers370',1224,'2024-07-05',2),(125,'Airpods350',125,'2024-07-06',5),(126,'Airpods370',1226,'2024-07-07',6);

select * from orders;

create or replace function get_orders_in_date_range(start_date date,end_date date) 
	returns table (orderid int, productid int,customerid int,orderdate date, quantity int)
as $$ begin
return query
select o.orderid,o.prodectid,o.productid,o.orderdate,o.quantity from orders o 
where o.orderdate between start_date and end_date;
end;
$$
language plpgsql;

select * from orders where orderdate between '2024-07-03' and '2024-07-05';