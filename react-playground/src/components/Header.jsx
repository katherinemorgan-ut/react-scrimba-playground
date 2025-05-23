import chefClaudeLogo from "/assets/chefclaudeicon.png"

function Header() {
    return (
        <>
        <header>
            <img id="claude-icon" src={chefClaudeLogo} alt="chef claude icon" width="80px" />
            <h1>Chef Claude</h1>

        </header>

        </>

    )
}

export default Header