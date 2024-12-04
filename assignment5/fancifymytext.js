
function showAlert()
{
    document.getElementById("txtbox").style.fontSize = "24em"




}
function addStyle()
{
    const txtArea = document.getElementById("txtbox");
    txtArea.style.color = "blue"
    txtArea.style.textDecoration = "underline"
    document.getElementById("txtbox").style.fontWeight = "bold"


}
function removeStyle()
{
    const txtArea = document.getElementById("txtbox");
    document.getElementById("txtbox").style.background = "";
    txtArea.style.fontWeight ="";
    txtArea.style.background ="";
    txtArea.style = "";

}
function bold()
{
    document.getElementById("txtbox").style.fontWeight = "bold"


}
function addMooSuffix(text)
{
    const sentences = text.split(".");
    text = sentences.join(".-Moo");
    return text;

}
function moo()
{    
    const textArea = document.getElementById("txtbox");
    textArea.style.textTransform = "uppercase"
    const originalText = textArea.value;
    const modifiedText = addMooSuffix(originalText);
    textArea.value = modifiedText;

}