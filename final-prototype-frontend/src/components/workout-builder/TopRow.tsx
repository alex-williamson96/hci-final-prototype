const TopRow = () => {
  return (
    <div className="w-full flex flex-row pl-4 pr-4">
      <span className="p-2 flex justify-center" style={{ flex: '1 1 10%' }}>Set</span>
      <span className="p-2 flex justify-center" style={{ flex: '1 1 22.5%' }}>Weight</span>
      <span className="p-2 flex justify-center" style={{ flex: '1 1 22.5%' }}>Reps</span>
      <span className="p-2 flex justify-center" style={{ flex: '1 1 22.5%' }}>Target</span>
      <span className="p-2 flex justify-center" style={{ flex: '1 1 22.5%' }}>RPE</span>
    </div>
  );
};

export default TopRow;