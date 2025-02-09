import {useState} from 'react';
import PageLayout from '../../layout/PageLayout.tsx';
import catalogData from '../../data/catalogData.json';
import {CatalogItem} from './types/CatalogDetail.ts';
import Pagination from '../../components/Pagination.tsx';

const Catalog = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(catalogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData: CatalogItem[] = catalogData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <PageLayout title="카탈로그 페이지 본문">
      <div className="mx-20">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <h1 className="mb-4 text-center text-3xl font-semibold text-gray-900">
            카탈로그
          </h1>
          <hr className="border-primary mx-auto mb-6 w-4/5" />

          <ul className="space-y-4">
            {currentData.map((item: CatalogItem) => (
              <li
                key={item.id}
                className="border-primary flex flex-col items-center justify-between border-b p-4 md:flex-row">
                <div className="mb-2 md:mb-0">
                  <p className="text-base text-gray-600 sm:text-lg">
                    {item.title}.{item.fileType}
                  </p>
                </div>
                <div>
                  <a
                    href={item.downloadUrl}
                    className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    download>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="white">
                      <path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z" />
                      <path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z" />
                    </svg>
                    다운로드
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Catalog;
