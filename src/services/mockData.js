import { getAvatarUrl } from "./avatarService";

// Mock data service for table rows
export const mockTableData = [
  {
    id: 1,
    orderId: "ORD-001",
    userName: "John Doe",
    userAvatar: getAvatarUrl(1),
    project: "E-commerce Platform",
    address: "123 Main St, New York, NY 10001",
    date: "2024-01-15",
    status: "Complete",
  },
  {
    id: 2,
    orderId: "ORD-002",
    userName: "Jane Smith",
    userAvatar: getAvatarUrl(2),
    project: "Mobile App",
    address: "456 Oak Ave, Los Angeles, CA 90210",
    date: "2024-01-14",
    status: "In Progress",
  },
  {
    id: 3,
    orderId: "ORD-003",
    userName: "Mike Johnson",
    userAvatar: getAvatarUrl(3),
    project: "Website Redesign",
    address: "789 Pine St, Chicago, IL 60601",
    date: "2024-01-13",
    status: "Pending",
  },
  {
    id: 4,
    orderId: "ORD-004",
    userName: "Sarah Wilson",
    userAvatar: getAvatarUrl(4),
    project: "API Integration",
    address: "321 Elm St, Houston, TX 77001",
    date: "2024-01-12",
    status: "Approved",
  },
  {
    id: 5,
    orderId: "ORD-005",
    userName: "David Brown",
    userAvatar: getAvatarUrl(5),
    project: "Database Migration",
    address: "654 Maple Dr, Phoenix, AZ 85001",
    date: "2024-01-11",
    status: "Rejected",
  },
  {
    id: 6,
    orderId: "ORD-006",
    userName: "Lisa Davis",
    userAvatar: getAvatarUrl(6),
    project: "UI/UX Design",
    address: "987 Cedar Ln, Philadelphia, PA 19101",
    date: "2024-01-10",
    status: "Complete",
  },
  {
    id: 7,
    orderId: "ORD-007",
    userName: "Tom Anderson",
    userAvatar: getAvatarUrl(7),
    project: "Backend Services",
    address: "147 Birch St, San Antonio, TX 78201",
    date: "2024-01-09",
    status: "In Progress",
  },
  {
    id: 8,
    orderId: "ORD-008",
    userName: "Amy Taylor",
    userAvatar: getAvatarUrl(8),
    project: "Frontend Development",
    address: "258 Spruce Ave, San Diego, CA 92101",
    date: "2024-01-08",
    status: "Pending",
  },
  {
    id: 9,
    orderId: "ORD-009",
    userName: "Chris Miller",
    userAvatar: getAvatarUrl(9),
    project: "Testing Suite",
    address: "369 Willow Way, Dallas, TX 75201",
    date: "2024-01-07",
    status: "Approved",
  },
  {
    id: 10,
    orderId: "ORD-010",
    userName: "Emma Garcia",
    userAvatar: getAvatarUrl(10),
    project: "DevOps Setup",
    address: "741 Poplar Blvd, San Jose, CA 95101",
    date: "2024-01-06",
    status: "Complete",
  },
  {
    id: 11,
    orderId: "ORD-011",
    userName: "Ryan Martinez",
    userAvatar: getAvatarUrl(11),
    project: "Security Audit",
    address: "852 Ash St, Austin, TX 78701",
    date: "2024-01-05",
    status: "In Progress",
  },
  {
    id: 12,
    orderId: "ORD-012",
    userName: "Olivia Rodriguez",
    userAvatar: getAvatarUrl(12),
    project: "Performance Optimization",
    address: "963 Hickory Dr, Jacksonville, FL 32201",
    date: "2024-01-04",
    status: "Pending",
  },
  {
    id: 13,
    orderId: "ORD-013",
    userName: "James Lee",
    userAvatar: getAvatarUrl(13),
    project: "Code Review",
    address: "159 Cherry Ln, Columbus, OH 43201",
    date: "2024-01-03",
    status: "Approved",
  },
  {
    id: 14,
    orderId: "ORD-014",
    userName: "Sophia White",
    userAvatar: getAvatarUrl(14),
    project: "Documentation",
    address: "357 Dogwood St, Charlotte, NC 28201",
    date: "2024-01-02",
    status: "Complete",
  },
  {
    id: 15,
    orderId: "ORD-015",
    userName: "Daniel Clark",
    userAvatar: getAvatarUrl(15),
    project: "Bug Fixes",
    address: "468 Sycamore Ave, Seattle, WA 98101",
    date: "2024-01-01",
    status: "Rejected",
  },
];

// Mock API function to simulate server response
export const fetchTableData = async (
  page = 1,
  limit = 10,
  search = "",
  sortBy = "",
  sortOrder = "asc"
) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let filteredData = [...mockTableData];

  // Apply search filter
  if (search) {
    filteredData = filteredData.filter(
      (item) =>
        item.orderId.toLowerCase().includes(search.toLowerCase()) ||
        item.userName.toLowerCase().includes(search.toLowerCase()) ||
        item.project.toLowerCase().includes(search.toLowerCase()) ||
        item.address.toLowerCase().includes(search.toLowerCase()) ||
        item.status.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply sorting
  if (sortBy) {
    filteredData.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }

  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalCount: filteredData.length,
    totalPages: Math.ceil(filteredData.length / limit),
    currentPage: page,
  };
};
