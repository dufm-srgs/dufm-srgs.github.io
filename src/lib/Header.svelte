<div>
    <h1><a href="/">DUFM</a></h1>
    <a href="#what">What we do</a>
</div>

<style lang="scss">
    div {
        width: calc(100% - 2rem);
        padding: 1rem;
        position: fixed;
        background: lightgray;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    h1 {
        font-size: 3rem;
    }

    @media (max-width: 600px) {
        div {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            text-align: center;
        }
    }
    
    a {
        font-size: 2rem;
        margin-left: 1rem;
        color: black;
    }

    h1 {
        margin: 0;

        a {
            font-size: 3rem;
        }
    }
</style>