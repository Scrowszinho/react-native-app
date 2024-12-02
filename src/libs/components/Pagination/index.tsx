import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type PaginationProps = {
  limit: number;
  page: number;
  count: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  limit,
  page,
  count,
  onPageChange,
}) => {
  const totalPages = Math.ceil(count / limit);
  const maxVisibleButtons = 4;
  const currentPageBlock = Math.floor(page / maxVisibleButtons);

  const startPage = currentPageBlock * maxVisibleButtons;
  const endPage = Math.min(startPage + maxVisibleButtons, totalPages);

  const renderPageNumbers = () => {
    const pageButtons = [];
    for (let i = startPage; i < endPage; i++) {
      pageButtons.push(
        <TouchableOpacity
          key={i}
          style={[styles.pageButton, page === i && styles.activePageButton]}
          onPress={() => onPageChange(i)}
        >
          <Text style={[styles.pageText, page === i && styles.activePageText]}>
            {i + 1}
          </Text>
        </TouchableOpacity>,
      );
    }
    return pageButtons;
  };

  return (
    <View style={styles.paginationContainer}>
      {currentPageBlock > 0 && (
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => onPageChange(startPage - 1)}
        >
          <Text style={styles.pageText}>...</Text>
        </TouchableOpacity>
      )}

      {renderPageNumbers()}

      {totalPages > endPage && (
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => onPageChange(endPage)}
        >
          <Text style={styles.pageText}>...</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
