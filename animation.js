document.querySelector('a[href="#home"]').addEventListener('click', function(e)
{
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
    });
});

document.querySelector('a[href="#About"]').addEventListener('click', function(e)
{
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
    });
});

document.querySelector('a[href="#Life"]').addEventListener('click', function(e)
{
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
    });
});

document.querySelector('a[href="#Social"]').addEventListener('click', function(e)
{
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
    });
});