import { useState } from "react";

const Logic = () => {
    const [stage, setStage] = useState("setPasscode");
    const [code, setCode] = useState("");
    const [passcode, setPasscode] = useState("");
    const [finalPasscode, setFinalPasscode] = useState("");
    const [selectedCells, setSelectedCells] = useState([]); // To track selected cells

    // Create a grid of numbers from 1 to 9 (rows) and letters A to I (columns)
    const gridRows = [...Array(9).keys()]; // 9 rows [0,1,2,...8]
    const gridColumns = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // 9 columns

    const handleClick = (boxCode) => {
        console.log(boxCode);
        setCode((prevCode) => prevCode + boxCode); // Concatenate the new code
        setSelectedCells([...selectedCells, boxCode]); // Add the selected cell to the list
    };

    const handlePasscode = () => {
        console.log(code.length);
        if (stage === "setPasscode" && selectedCells.length >= 6) {
            setPasscode(code); // Save the entered passcode
            setStage("confirmPasscode");
            setCode(""); // Clear the code input
            setSelectedCells([]); // Clear selected cells
        } else if (stage === "confirmPasscode" && selectedCells.length >= 6) {
            if (code === passcode) {
                // If passcodes match, set the final passcode
                setFinalPasscode(passcode);
                setStage("logIn");
                setCode("");
                setSelectedCells([]); // Clear selected cells
            } else {
                alert("Passcodes do not match, please try again.");
                setCode(""); // Clear the code input if passcodes don't match
                setSelectedCells([]); // Clear selected cells
            }
        } else if (stage === "logIn") {
            if (code === finalPasscode) {
                setCode(""); // Clear the code input if wrong passcode is entered
                setSelectedCells([]);
                alert("Successfully Logged in");
            } else {
                alert("Wrong Passcode, please try again.");
                setCode(""); // Clear the code input if wrong passcode is entered
                setSelectedCells([]); // Clear selected cells
            }
        } else {
            alert("Select at least 6 cells for passcode."); // Alert if less than 6 cells are selected
        }
    };

    const returnButtonText = () => {
        if (stage === "setPasscode") {
            return "Set Passcode";
        } else if (stage === "confirmPasscode") {
            return "Confirm Passcode";
        } else {
            return "Log In"; // When final passcode is set, display "Log In"
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-9 gap-1">
                {gridRows.map((rowIndex) =>
                    gridColumns.map((colIndex) => {
                        // Calculate a unique key using both row and column indices
                        const boxCode = `${rowIndex + 1}${colIndex}`;
                        const isSelected = selectedCells.includes(boxCode); // Check if the cell is selected
                        return (
                            <button
                                key={boxCode}
                                className={`bg-blue-200 h-10 w-10 hover:scale-105 focus:bg-blue-600 ${
                                    isSelected ? "bg-blue-600" : ""
                                }`}
                                onClick={() => handleClick(boxCode)}
                            >
                                *
                            </button>
                        );
                    })
                )}
            </div>
            <div className="mt-4">
                <button onClick={handlePasscode} className="bg-blue-400 p-2 border border-black rounded-md">
                    {returnButtonText()}
                </button>
            </div>
            <div className="mt-4">
                {stage === "logIn" && (
                    <p>Your Passcode was saved successfully! Now you can log in.</p>
                )}
            </div>
        </div>
    );
};

export default Logic;
