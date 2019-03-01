insert into users(username, password)
values(${username}, ${password})

select count(*) from users
where username = ${username}

select * from users
where username = ${username}

