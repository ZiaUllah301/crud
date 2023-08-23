import React from 'react';

function Table() {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y mb-2 divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                John Doe
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                john@example.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Admin
              </td>
            </tr>
            <tr>
                <td className='px-6 py-4 whitespace-nowrap'>
                    cena
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                    cena@gmail.com
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                    clark
                </td>
            </tr>
           <tr>
            <td className='px-6 py-4 whitespace-nowrap'>
                jackie
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                jackie@gmail.com
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                Retire
            </td>
           </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
