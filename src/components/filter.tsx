import {
  ChangeEvent,
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';
import { ArticlesContext } from '../context';
import { IFilter } from '../types/filter';
import { ArticlesContextType } from '../context';
import { ReactComponent as UserIcon } from '../assets/images/icons/user.svg';

const Filter = () => {
  const header = document.querySelector('.header');
  const { filterArticles, filterDate } = useContext(
    ArticlesContext
  ) as ArticlesContextType;
  const [filterData, setFilterData] = useState<IFilter>({
    author: '',
    from: filterDate.from,
    till: filterDate.till,
  });
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const filterInitialPositionRef = useRef<number>(0);
  const { author, from, till } = filterData;

  const handleChangeFilterData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterData((filterData) => {
      return { ...filterData, [name]: value };
    });
  };

  const calculateScroll = useCallback(() => {
    const isOverFilter =
      window.scrollY + header!.getBoundingClientRect().height >=
      filterInitialPositionRef.current;
    setIsSticky(isOverFilter);
  }, [header]);

  useEffect(() => {
    filterArticles(filterData);
  }, [filterArticles, filterData]);

  useEffect(() => {
    document.addEventListener('scroll', calculateScroll);

    return () => {
      document.removeEventListener('scroll', calculateScroll);
    };
  }, [calculateScroll]);

  useEffect(() => {
    filterInitialPositionRef.current = filterRef!.current!.offsetTop;
  }, []);

  return (
    <div
      className={`filter ${isSticky ? 'filter--sticky' : ''}`}
      ref={filterRef}
    >
      <div className="container">
        <div className="filter__wrapper">
          <div className="filter__block filter__block--user">
            <input
              className="filter__input"
              type="text"
              name="author"
              value={author}
              placeholder="Введите автора"
              onChange={handleChangeFilterData}
            />
            <UserIcon />
          </div>
          <div className="filter__block filter__block--date">
            От
            <input
              className="filter__input"
              type="date"
              name="from"
              value={from}
              max={till}
              placeholder="От"
              onChange={handleChangeFilterData}
            />
            ~ До
            <input
              className="filter__input"
              type="date"
              name="till"
              value={till}
              min={from}
              placeholder="До"
              onChange={handleChangeFilterData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
