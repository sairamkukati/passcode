const Instructions = () =>{
    return (
        <div className="w-1/4">
    <h1 className="font-bold mb-2">Instructions to set the passcode:</h1>
    <hr />
    <div className="font-serif m-4">
        <ul>
            <li>1.Ensure that your pattern covers at least 6 to 9 cells. Longer patterns are more secure.</li>
            <li>2.Avoid using easy-to-guess patterns like straight lines (e.g., a row or column), simple geometric shapes (e.g., square, circle), or patterns like "L" or "T".</li>
            <li>3.Choose a pattern that is easy for you to recall but difficult for others to guess.</li>
        </ul>
        <p className="text-orange-600">Note: you can select random cells , but suggest to select in sequence(You may forgot the passcode)</p>
    </div>
</div>

    )
}

export default Instructions;