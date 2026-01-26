import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui';
import type { CategoryInfo } from '../../types';
import './CategoryCard.css';

interface CategoryCardProps {
  category: CategoryInfo;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/catalogo#${category.id}`} className="category-card-link">
      <Card hover className="category-card">
        <div className="category-icon">
          <i className={`fas fa-${category.icon}`}></i>
        </div>
        <h3 className="category-name">{category.name}</h3>
        <p className="category-description">{category.description}</p>
      </Card>
    </Link>
  );
};
