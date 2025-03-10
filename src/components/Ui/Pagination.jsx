const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center gap-2 text-white">
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-700"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="px-3 py-1 bg-primary text-white rounded-md">
        {currentPage}
      </span>
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-700"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
