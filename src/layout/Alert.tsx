/** Component for Alert
 *
 * Props:
 * - messages: []
 *
 * State:
 * - none
 *
 * SearchBox -> Alert
 */

type AlertsProps = {
    messages: Array<string>;
}

function Alert({ messages}: AlertsProps) {
    console.debug("Alert", messages);

    return (
        <div className="Alert" role="alert">
          {messages.map(error => (
            <p key={error}>
              {error}
            </p>
          ))}
        </div>
      );
}

export default Alert;