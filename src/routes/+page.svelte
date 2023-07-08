<script lang="ts">
    // import { math } from 'mathlifier';
</script>

<main>
    <div class="hero">
        <h1>Real Problems, Real Math</h1>

        <p>Explore mathematics beyound the boundaries of high school in the Dirt Under the Fingernails Mathematics course @ Virginia Summer Residential Governers School.</p>
    </div>

    <h2>What we do</h2>


    <div class="what">
        <div class="section">
            <h3>Analyze Problems</h3>
            <p>
                We explore various topics in mathematics, challenging ourselves to think critically and creatively about the world around us.
                Whether working alone or in groups, this course prepares you to tackle a wide variety of problems with confidence.
            </p>
        </div>

        <div class="section">
            <h3>Explore and Create</h3>

            <p>
                Explore problems via graphs, simulations, and other visualizations. Look for patterns and connections in your data
                and use them to conjecture and prove new results.
            </p>
        </div>

        <div class="section">
            <h3>Prove and Justify</h3>

            <p>
                Back up your conjectures with rigorous proofs. Learn to write proofs that are clear, concise, and convincing.
                Learn about the different types of proofs and various principles of logic to help build reason.
            </p>
        </div>
    </div>

    <div class="example">
        <h2>Example Problems</h2>

        <h3>From </h3>
    </div>
</main>

<style lang="scss">
    div.hero {
        width: calc(100% - 10rem);
        text-align: center;
        padding: 5rem;
        background-color: skyblue;

        p {
            font-size: 2rem;
        }
    }

    div.example {
        padding: 1rem;
        text-align: center;
    }

    // .math {
    //     font-family:'Times New Roman', Times, serif;
    //     font-size: 1.4rem;
    // }

    div.what {
        padding: 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        div.section {
            width: 30rem;
            margin: 1rem;
            padding: 1rem;
            background: lightgray;
            border-radius: 1rem;

            &:nth-child(2n) {
                background: lightblue;
            }
        }

        h3 {
            margin-top: 2rem;
            font-size: 3rem;
            text-align: center;
        }
    }

    h1 {
        font-size: 5rem;
    }

    h2 {
        margin-top: 2rem;
        text-align: center;
        font-size: 4rem;
    }
</style>