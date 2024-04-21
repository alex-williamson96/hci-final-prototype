const TopRow = () => {
  return (
    <div className="w-full flex flex-row">
      <span className="p-2 flex" style={{ flex: '1 1 10%' }}>Set</span>
      <span className="p-2 flex" style={{ flex: '1 1 22.5%' }}>Weight</span>
      <span className="p-2 flex" style={{ flex: '1 1 22.5%' }}>Reps</span>
      <span className="p-2 flex" style={{ flex: '1 1 22.5%' }}>Target</span>
      <span className="p-2 flex" style={{ flex: '1 1 22.5%' }}>RPE</span>
    </div>
  );
};

export default TopRow;