export default function MiniSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[100px]">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
