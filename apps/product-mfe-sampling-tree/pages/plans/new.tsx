/*
  This example requires Tailwind CSS v3.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useEffect, useRef, useState } from 'react';
import { ComboBox } from '../../components/Combobox';

interface IFactor {
  id: number;
  name: string;
  levels: number;
  hierarchy: string;
}

const initialFactors: Array<IFactor> = [
  {
    id: 1,
    name: 'Factory',
    levels: 1,
    hierarchy: 'crossed',
  },
  {
    id: 2,
    name: 'Process',
    levels: 1,
    hierarchy: 'crossed',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const checkbox = useRef(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedFactors, setSelectedFactors] = useState<Array<IFactor>>([]);
  const [factors, setFactors] = useState<Array<IFactor>>(initialFactors);

  useEffect(() => {
    const isIndeterminate =
      selectedFactors.length > 0 && selectedFactors.length < factors.length;
    setChecked(selectedFactors.length === factors.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedFactors, factors.length]);

  function toggleAll() {
    setSelectedFactors(checked || indeterminate ? [] : factors);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="px-4 py-4 sm:py-6 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Experimental Plan
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the factors in your experiment including their name,
            number of levels and hierarchy.
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="relative overflow-hidden border border-gray-300 rounded-lg">
              {selectedFactors.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white mx-4 px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Levels
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Hierarchy
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {factors.map((person) => (
                    <tr
                      key={person.id}
                      className={
                        selectedFactors.includes(person)
                          ? 'bg-gray-50'
                          : undefined
                      }
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedFactors.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={person.id}
                          checked={selectedFactors.includes(person)}
                          onChange={(e) =>
                            setSelectedFactors(
                              e.target.checked
                                ? [...selectedFactors, person]
                                : selectedFactors.filter((p) => p !== person)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedFactors.includes(person)
                            ? 'text-indigo-600'
                            : 'text-gray-900'
                        )}
                      >
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                          placeholder={person.name}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                        <input
                          type="number"
                          name="levels"
                          id="levels"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                          placeholder={String(person.levels)}
                          min={1}
                          step={1}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <ComboBox />
                        {/* {person.hierarchy} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-end">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add factor
        </button>
      </div>
    </div>
  );
}
