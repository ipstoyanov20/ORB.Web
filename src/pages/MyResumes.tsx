export const MyResumes:React.FC = () => {
    return (
      <div className="text-black z-1 absolute w-[80%] h-[100%] top-0 right-0 grid place-items-center ">
        <div className="w-[80%] h-[80%] rounded-md shadow-xl bg-gray-400">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              #
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Created
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Modified
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              87
                          </th>
                          <td className="px-6 py-4">
                              My aweesome resume
                          </td>
                          <td className="px-6 py-4">
                              22-01-2023 10:30:15
                          </td>
                          <td className="px-6 py-4">
                            07-04-2023 12:10:47
                          </td>
                          <td className="px-6 py-4">
                              <a 
                                href="/panel/myresume/535a2142-b902-41a6-9ce5-414879a201e4" 
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                  Edit
                              </a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    );

}