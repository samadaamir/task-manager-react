import React from "react";
import { Search, ListTodo, CheckCircle, Clock } from "lucide-react";

const SearchBar = ({
  search,
  setSearch,
  totalTasks,
  completedTasks,
  pendingTasks,
}) => {
  return (
    <div className="space-y-5">

      {/* Search Card */}
      <div className="bg-[#8EA8E5] rounded-3xl shadow-xl p-6">

        <h2 className="text-2xl font-bold text-[#3E558F] mb-4">
          Search Tasks
        </h2>

        <div className="relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E558F]"
            size={20}
          />

          <input
            type="text"
            placeholder="Search your tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-white
              rounded-xl
              py-3
              pl-12
              pr-4
              outline-none
              border-2
              border-[#C7D2F3]
              focus:border-[#3E558F]
            "
          />

        </div>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl shadow-lg p-5">

          <div className="flex items-center gap-3">

            <ListTodo
              size={30}
              className="text-[#3E558F]"
            />

            <div>

              <p className="text-gray-500 text-sm">
                Total
              </p>

              <h3 className="text-2xl font-bold text-[#3E558F]">
                {totalTasks}
              </h3>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">

          <div className="flex items-center gap-3">

            <CheckCircle
              size={30}
              className="text-green-600"
            />

            <div>

              <p className="text-gray-500 text-sm">
                Completed
              </p>

              <h3 className="text-2xl font-bold text-green-600">
                {completedTasks}
              </h3>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">

          <div className="flex items-center gap-3">

            <Clock
              size={30}
              className="text-orange-500"
            />

            <div>

              <p className="text-gray-500 text-sm">
                Pending
              </p>

              <h3 className="text-2xl font-bold text-orange-500">
                {pendingTasks}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SearchBar